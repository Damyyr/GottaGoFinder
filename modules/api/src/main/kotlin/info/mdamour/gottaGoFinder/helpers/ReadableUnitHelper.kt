package info.mdamour.gottaGoFinder.helpers

import kotlin.math.pow
import kotlin.math.round

class ReadableUnitHelper(private val size: Long) {
    fun display(): String {
        return when {
            size > 2.0.pow(30.0) -> "${round(size / 2.0.pow(30.0))} GB"
            size > 2.0.pow(20.0) -> "${round(size / 2.0.pow(20.0))} MB"
            size > 2.0.pow(10.0) -> "${round(size / 2.0.pow(10.0))} KB"
            else -> "$size B"
        }
    }
}