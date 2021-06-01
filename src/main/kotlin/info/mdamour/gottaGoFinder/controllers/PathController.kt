package info.mdamour.gottaGoFinder.controllers

import info.mdamour.gottaGoFinder.models.Path
import info.mdamour.gottaGoFinder.services.DEFAULT_PATH
import info.mdamour.gottaGoFinder.services.PathService
import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("api/paths")
class PathController(private val service: PathService) {

    @CrossOrigin
    @GetMapping
    fun files(
        @RequestParam(name = "path", required = true, defaultValue = DEFAULT_PATH) path: String,
        @RequestParam(name = "showVisible", defaultValue = "true") showVisible: Boolean,
        @RequestParam(name = "showHidden", defaultValue = "false") showHidden: Boolean
    ): Collection<Path> {
        return service.listPath(path, showVisible, showHidden)
    }

}