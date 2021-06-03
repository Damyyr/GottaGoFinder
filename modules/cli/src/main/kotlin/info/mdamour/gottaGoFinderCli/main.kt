@file:JvmName("MainKt")

package info.mdamour.gottaGoFinderCli

import com.github.ajalt.clikt.core.CliktCommand
import com.github.ajalt.clikt.parameters.options.flag
import com.github.ajalt.clikt.parameters.options.option
import com.github.ajalt.clikt.parameters.options.required
import info.mdamour.gottaGoFinder.helpers.ReadableUnitHelper
import info.mdamour.gottaGoFinder.services.PathService

class Cli : CliktCommand() {
    private val path: String by option(help = "Path you want to walk through").required()
    private val showHidden by option("-a", "--all", help = "Show hidden files").flag(default = false)
    private val save by option("-s", "--save", help = "Save result in an index (coming soon)").flag(default = false)

    override fun getFormattedHelp(): String {
        echo(headerMessage())
        return super.getFormattedHelp()
    }

    override fun run() {
        val service = PathService(path)
        var paths = service.listPath(showHidden = showHidden)
        var maxLength = (paths.maxByOrNull { it.path.length })?.path?.length

        paths.forEach() {
            var type = if (it.isDirectory) {
                "D"
            } else {
                "F"
            }
            echo(
                String.format(
                    "%-2s %-${maxLength}s %10s %10s",
                    type,
                    it.path,
                    it.lastModified,
                    ReadableUnitHelper(it.size).display()
                )
            )
        }

        echo(maxLength?.let { "-".repeat(it) })
        echo(
            String.format(
                "%-2s %-${maxLength}s %10s %-3s", "Total", "${paths.size} element(s)", "Size:",
                ReadableUnitHelper(paths.sumOf { it.size }).display()
            )
        )
    }
}

fun main(args: Array<String>) {
    Cli().main(args)
}

private fun headerMessage(): String {
    return """
 _____       _   _        _____      ______ _           _           
|  __ \     | | | |      |  __ \     |  ___(_)         | |          
| |  \/ ___ | |_| |_ __ _| |  \/ ___ | |_   _ _ __   __| | ___ _ __ 
| | __ / _ \| __| __/ _` | | __ / _ \|  _| | | '_ \ / _` |/ _ \ '__|
| |_\ \ (_) | |_| || (_| | |_\ \ (_) | |   | | | | | (_| |  __/ |   
 \____/\___/ \__|\__\__,_|\____/\___/\_|   |_|_| |_|\__,_|\___|_|  
    .      _,'f----.._
    |\ ,-'"/  |     ,'
    |,_  ,--.      /    
    /,-. ,'`.     (_
    f  o|  o|__     "`-.
    ,-._.,--'_ `.   _.,-`
    `"' ___.,'` j,-'
      `-.__.,--'
   
    """
}