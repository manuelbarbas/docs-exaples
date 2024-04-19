import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    kotlin("jvm") version "1.8.21"
    application
}

group = "org.example"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
    maven("https://www.jitpack.io")

}

dependencies {
    implementation("com.github.komputing.kethereum:abi:0.86.0")
    implementation("com.github.komputing.kethereum:erc20:0.86.0")
    implementation("com.github.komputing.kethereum:model:0.86.0")
    implementation("com.github.komputing.kethereum:eip155:0.86.0")
    implementation("com.github.komputing.kethereum:erc681:0.86.0")
    implementation("com.github.komputing.kethereum:erc1450:0.86.0")
    implementation("com.github.komputing.kethereum:extensions_transactions:0.86.0")
    implementation("com.github.komputing.kethereum:flows:0.86.0")
    implementation("com.github.komputing.kethereum:rpc:0.86.0")
    implementation("com.github.komputing.kethereum:rpc_min3:0.86.0")
    implementation("com.github.komputing.kethereum:crypto:0.86.0")
    implementation("com.github.komputing.kethereum:keystore:0.86.0")
    implementation("com.github.komputing:khex:1.1.2")
    implementation("com.github.walleth.kethereum:extensions_transactions:0.86.0")




    implementation("com.github.walleth.kethereum:crypto_impl_bouncycastle:0.86.0")

    testImplementation(kotlin("test"))
}

tasks.test {
    useJUnitPlatform()
}

tasks.withType<KotlinCompile> {
    kotlinOptions.jvmTarget = "1.8"
}

application {
    mainClass.set("MainKt")
}