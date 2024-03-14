// You can access the NodeCG api anytime from the `window.nodecg` object
// Or just `nodecg` for short. Like this!:
const rpl_GraphicsUpdaterRequirements = nodecg.Replicant('GraphicsUpdaterRequirements');
const rpl_PlayerName = nodecg.Replicant('PlayerName')
function update_Values(){
    rpl_GraphicsUpdaterRequirements.value.spreadsheetID = document.getElementById('in_spreadsheetId').value
    rpl_GraphicsUpdaterRequirements.value.worksheetName = document.getElementById('in_worksheetName').value
    rpl_GraphicsUpdaterRequirements.value.apiKey = document.getElementById('in_apiKey').value
    rpl_GraphicsUpdaterRequirements.value.updateInterval = document.getElementById('in_updateInterval').value
}

function update_PlayerName() {
    rpl_PlayerName.value = document.getElementById('in_playername').value
}

rpl_GraphicsUpdaterRequirements.on('change', () => {
    document.getElementById('in_spreadsheetId').value = rpl_GraphicsUpdaterRequirements.value.spreadsheetID
    document.getElementById('in_worksheetName').value = rpl_GraphicsUpdaterRequirements.value.worksheetName
    document.getElementById('in_apiKey').value = rpl_GraphicsUpdaterRequirements.value.apiKey
    document.getElementById('in_updateInterval').value = rpl_GraphicsUpdaterRequirements.value.updateInterval
})
rpl_PlayerName.on('change', () => {
    document.getElementById('in_playername').value = rpl_PlayerName.value
})

function startScoreboard(){
    nodecg.sendMessage('startScoreboard')
}