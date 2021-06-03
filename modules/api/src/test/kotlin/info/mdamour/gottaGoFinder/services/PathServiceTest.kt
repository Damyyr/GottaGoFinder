package info.mdamour.gottaGoFinder.services

import info.mdamour.gottaGoFinder.models.Path
import io.mockk.every
import io.mockk.mockk
import io.mockk.mockkConstructor
import org.junit.jupiter.api.Assertions.assertEquals
import org.junit.jupiter.api.Disabled
import org.junit.jupiter.api.Test
import java.io.File

private val service = PathService("./")

internal class PathServiceTest {

    @Test
    fun `should list the custom path`() {
        val mockFile = mockk<File>()
        val pathMock = mockk<java.nio.file.Path>()
        val mockArrayFiles = arrayOf<File>(mockFile)
        val expectedReturn =
            listOf<Path>(Path(isDirectory = false, path = "file", lastModified = "06/01/2021 21:19:57", size = 13))

        mockkConstructor(PathService::class)
        every { service.fileClass().listFiles() } returns mockArrayFiles
        every { mockFile.isHidden } returns false
        every { mockFile.isDirectory } returns false
        every { mockFile.toString() } returns "file"
        every { mockFile.lastModified() } returns 1622596797328
        every { mockFile.toPath() } returns pathMock
        every { service.folderSize(pathMock) } returns 13

        assertEquals(expectedReturn, service.listPath())
    }


    // FIXME There is a malformed mock that I need to investigate
    @Test
    @Disabled
    fun `should order`() {
        val bigPathMock = mockk<java.nio.file.Path>()
        val smallPathMock = mockk<java.nio.file.Path>()

        val bigFileMock = mockk<File> {
            every { isHidden } returns false
            every { isDirectory } returns false
            every { toString() } returns "fileBig"
            every { lastModified() } returns 1622596797328
            every { toPath() } returns bigPathMock
        }
        val smallFileMock = mockk<File> {
            every { isHidden } returns false
            every { isDirectory } returns false
            every { toString() } returns "file"
            every { lastModified() } returns 1622596797328
            every { toPath() } returns smallPathMock
        }
        val mockArrayFiles = arrayOf<File>(smallFileMock, bigFileMock)
        val expectedReturn =
            listOf<Path>(
                Path(isDirectory = false, path = "fileBig", lastModified = "06/01/2021 21:19:57", size = 500),
                Path(isDirectory = false, path = "file", lastModified = "06/01/2021 21:19:57", size = 2)
            )

        mockkConstructor(PathService::class)
        every { service.fileClass().listFiles() } returns mockArrayFiles
        every { service.folderSize(bigPathMock) } returns 500
        every { service.folderSize(smallPathMock) } returns 2

        assertEquals(expectedReturn, service.listPath())
    }

}