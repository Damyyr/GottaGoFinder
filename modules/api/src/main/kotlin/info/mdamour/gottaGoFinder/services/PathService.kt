package info.mdamour.gottaGoFinder.services

import info.mdamour.gottaGoFinder.models.Path
import org.springframework.stereotype.Service
import java.io.File
import java.io.IOException
import java.nio.file.Files
import java.text.SimpleDateFormat


const val DEFAULT_PATH = "./"
val SDF: SimpleDateFormat = SimpleDateFormat("MM/dd/yyy HH:mm:ss")

@Service
class PathService(private val path: String = DEFAULT_PATH) {
    fun listPath(
        showVisible: Boolean = true,
        showHidden: Boolean = false
    ): Collection<Path> {
        var paths = listOf<Path>()

        try {
            fileClass().listFiles()?.forEach {
                if (!it.isHidden && !showVisible) return@forEach
                if (it.isHidden && !showHidden) return@forEach

                try {
                    paths += Path(it.isDirectory, it.toString(), SDF.format(it.lastModified()), folderSize(it.toPath()))
                } catch (e: Exception) {
                    System.out.printf(
                        "\nAn error occurred during the file scanning. Please verify that you can access all of these files. \n%s\n\n",
                        e.message
                    )
                    return@forEach
                }
            }

        } catch (e: Exception) {
            System.out.printf(
                "\nAn error occurred during the file scanning. Please verify that you can access all of these files. \n%s\n\n",
                e.message
            )
        }

        return paths.sortedBy { it.size }
    }

    // There is an known issue with mockkConstructor which prevents to manipulate the File class in tests.
    // Split the logic make it easier to test
    // https://github.com/mockk/mockk/issues/117#issuecomment-593875539
    fun fileClass(): File = File(path)

    // public for testing
    fun folderSize(path: java.nio.file.Path): Long {
        var size: Long = 0

        try {
            Files.walk(path).use { walk ->
                size = walk
                    .filter(Files::isRegularFile)
                    .mapToLong { p ->
                        try {
                            return@mapToLong Files.size(p)
                        } catch (e: IOException) {
                            return@mapToLong 0L
                        }
                    }
                    .sum()
            }
        } catch (e: IOException) {
            System.out.printf("IO errors %s", e)
            return 0
        }

        return size
    }
}