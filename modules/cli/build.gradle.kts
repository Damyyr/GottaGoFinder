plugins {
    id("org.springframework.boot")
    kotlin("jvm")
}

dependencies {
    implementation(project(":modules:api"))

    implementation("org.jetbrains.kotlin:kotlin-reflect")
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
    implementation("com.github.ajalt.clikt:clikt:3.2.0")
}