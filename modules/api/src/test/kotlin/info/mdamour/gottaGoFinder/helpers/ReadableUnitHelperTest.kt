package info.mdamour.gottaGoFinder.helpers

import org.junit.jupiter.api.Assertions.assertTrue
import org.junit.jupiter.api.Test

internal class ReadableUnitHelperTest {
    @Test
    fun `when services should return byte`() {
        val displayedMessage = ReadableUnitHelper(10).display()
        assertTrue(displayedMessage == "10 B")
    }

    @Test
    fun `when services should return Kilobyte`() {
        val displayedMessage = ReadableUnitHelper(10240).display()
        assertTrue(displayedMessage == "10.0 KB")
    }

    @Test
    fun `when services should return Megabyte`() {
        val displayedMessage = ReadableUnitHelper(10485760).display()
        assertTrue(displayedMessage == "10.0 MB")
    }

    @Test
    fun `when services should return Gigabyte`() {
        val displayedMessage = ReadableUnitHelper(10737418240).display()
        assertTrue(displayedMessage == "10.0 GB")
    }
}