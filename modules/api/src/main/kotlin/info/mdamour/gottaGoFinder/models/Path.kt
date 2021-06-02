package info.mdamour.gottaGoFinder.models

data class Path(
    val isDirectory: Boolean,
    val path: String,
    val lastModified: String,
    val size: Long
) {
}