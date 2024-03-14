// You can access the NodeCG api anytime from the `window.nodecg` object
// Or just `nodecg` for short. Like this!:
const rpl_GraphicsUpdaterRequirements = nodecg.Replicant('GraphicsUpdaterRequirements');

NodeCG.waitForReplicants(rpl_GraphicsUpdaterRequirements).then(() => {
    
    console.log('ready')
})

let config = {
    "string": {
        "A2": "t0_rank",
        "B2": "t0_name",
        "C2": "t0_p0",
        "D2": "t0_p1",
        "E2": "t0_p2",
        "F2": "t0_points",
        "A3": "t1_rank",
        "B3": "t1_name",
        "C3": "t1_p0",
        "D3": "t1_p1",
        "E3": "t1_p2",
        "F3": "t1_points",
        "A4": "t2_rank",
        "B4": "t2_name",
        "C4": "t2_p0",
        "D4": "t2_p1",
        "E4": "t2_p2",
        "F4": "t2_points",
        "A5": "t3_rank",
        "B5": "t3_name",
        "C5": "t3_p0",
        "D5": "t3_p1",
        "E5": "t3_p2",
        "F5": "t3_points",
        "A6": "t4_rank",
        "B6": "t4_name",
        "C6": "t4_p0",
        "D6": "t4_p1",
        "E6": "t4_p2",
        "F6": "t4_points",
        "A7": "t5_rank",
        "B7": "t5_name",
        "C7": "t5_p0",
        "D7": "t5_p1",
        "E7": "t5_p2",
        "F7": "t5_points",
        "A8": "t6_rank",
        "B8": "t6_name",
        "C8": "t6_p0",
        "D8": "t6_p1",
        "E8": "t6_p2",
        "F8": "t6_points",
        "A9": "t7_rank",
        "B9": "t7_name",
        "C9": "t7_p0",
        "D9": "t7_p1",
        "E9": "t7_p2",
        "F9": "t7_points",
        "A10": "t8_rank",
        "B10": "t8_name",
        "C10": "t8_p0",
        "D10": "t8_p1",
        "E10": "t8_p2",
        "F10": "t8_points",
        "A11": "t9_rank",
        "B11": "t9_name",
        "C11": "t9_p0",
        "D11": "t9_p1",
        "E11": "t9_p2",
        "F11": "t9_points",
        "A12": "t10_rank",
        "B12": "t10_name",
        "C12": "t10_p0",
        "D12": "t10_p1",
        "E12": "t10_p2",
        "F12": "t10_points",
        "A13": "t11_rank",
        "B13": "t11_name",
        "C13": "t11_p0",
        "D13": "t11_p1",
        "E13": "t11_p2",
        "F13": "t11_points",
        "A14": "t12_rank",
        "B14": "t12_name",
        "C14": "t12_p0",
        "D14": "t12_p1",
        "E14": "t12_p2",
        "F14": "t12_points",
        "A15": "t13_rank",
        "B15": "t13_name",
        "C15": "t13_p0",
        "D15": "t13_p1",
        "E15": "t13_p2",
        "F15": "t13_points",
        "A16": "t14_rank",
        "B16": "t14_name",
        "C16": "t14_p0",
        "D16": "t14_p1",
        "E16": "t14_p2",
        "F16": "t14_points",
        "A17": "t15_rank",
        "B17": "t15_name",
        "C17": "t15_p0",
        "D17": "t15_p1",
        "E17": "t15_p2",
        "F17": "t15_points",
        "A18": "t16_rank",
        "B18": "t16_name",
        "C18": "t16_p0",
        "D18": "t16_p1",
        "E18": "t16_p2",
        "F18": "t16_points",
        "A19": "t17_rank",
        "B19": "t17_name",
        "C19": "t17_p0",
        "D19": "t17_p1",
        "E19": "t17_p2",
        "F19": "t17_points",
        "A20": "t18_rank",
        "B20": "t18_name",
        "C20": "t18_p0",
        "D20": "t18_p1",
        "E20": "t18_p2",
        "F20": "t18_points",
        "A21": "t19_rank",
        "B21": "t19_name",
        "C21": "t19_p0",
        "D21": "t19_p1",
        "E21": "t19_p2",
        "F21": "t19_points"
    }
}

nodecg.listenFor('startScoreboard', () => {
    console.log('message recieved')
    for (i = 0; i < document.getElementById('standings').children[0].children.length; i++ )
    {
        document.getElementById('standings').children[0].children[i].children[0].style = "border-right: 1px solid black";
        if (i === 0){
            document.getElementById('standings').children[0].children[i].children[2].style = "border-left: 1px solid black" 
        }
        else {
            document.getElementById('standings').children[0].children[i].children[4].style = "border-left: 1px solid black"
        }
    }
       const update = new GraphicsUpdater(config, rpl_GraphicsUpdaterRequirements.value.spreadsheetID, rpl_GraphicsUpdaterRequirements.value.worksheetName, rpl_GraphicsUpdaterRequirements.value.apiKey, rpl_GraphicsUpdaterRequirements.value.updateInterval, false);
    update.startUpdating()
})
