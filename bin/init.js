#!/usr/bin/env node

const cmdClr = require("./cmdClr")
const { exec } = require("child_process")
const fs = require("fs").promises

const repoUrl = "https://github.com/ZRNOF/create-p5-test"

async function folderExists(folderPath) {
	try {
		await fs.access(folderPath)
		return true
	} catch (error) {
		return false
	}
}

async function removePath(path) {
	try {
		await fs.rm(path, { recursive: true })
	} catch (error) {
		console.error(
			`${cmdClr(`[x] An error occurred while removing ${path}:`, "#FF0000")}`,
			error
		)
	}
}

function runCommand(command) {
	return new Promise((resolve, reject) => {
		exec(command, (error, stdout) => {
			if (error) {
				console.error(`${cmdClr("[x] Error:", "#FF0000")} ${error}`)
				reject(error)
			} else {
				console.log(stdout)
				resolve(stdout)
			}
		})
	})
}

async function main() {
	try {
		const folderName = process.argv[2] || "p5-test"

		if (await folderExists(folderName)) {
			const error = `[x] Error: The folder '${folderName}' already exists. Please choose a different folder name.`
			console.error(cmdClr(error, "#FF0000"))
			return
		}

		console.log(cmdClr("[*] Create p5 test folder...", "#7FFF7F"))
		await runCommand(`git clone ${repoUrl} ${folderName}`)

		console.log(cmdClr(`[*] Removing unnecessary files...`, "#7FFF7F"))
		removePath(`${folderName}/bin`)
		removePath(`${folderName}/LICENSE`)
		removePath(`${folderName}/package.json`)
		removePath(`${folderName}/README.md`)

		console.log(cmdClr("[+] Successfully.", "#7FFF7F"))
	} catch (error) {
		console.error(`${cmdClr("[x] An error occurred:", "#FF0000")}`, error)
	}
}

main()
