module.exports = function (nodecg) {
	nodecg.Replicant('GraphicsUpdaterRequirements', {defaultValue: 
		{
			spreadsheetID: "Spreadsheet ID",
			worksheetName: "Worksheet Name",
			apiKey: "api Key",
			updateInterval: 3000
		}
	});
	nodecg.Replicant('PlayerName', {
		defaultValue: "VG | NakaJF"
	})
};
