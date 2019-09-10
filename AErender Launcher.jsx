/* Interface */ 
var thisProject = app.project;
var OS = $.os.indexOf("Mac") != -1 ? "MAC": "WINDOWS";
var Form1;

if (this instanceof Panel) {
    Form1 = this;
} else {
    Form1 = new Window("palette", "AErender Launcher", undefined, {resizeable: true, closeButton: true});  
}

    //Form1.minimumSize = [190, 230];
    Form1.Panel1 = Form1.add("group");
    Form1.Panel1.orientation = "column";
    Form1.Panel1.alignment = ["fill", "top"];
    Form1.Panel1.alignChildren = "fill";
    //Form1.Panel1.layout.layout(true);

    Form1.Panel1.launcherPathLabel = Form1.Panel1.add("statictext");
    Form1.Panel1.launcherPathLabel.text = "Launcher Path";
    Form1.Panel1.launcherPathLabel.alignment = ["center", "top"];

    Form1.Panel1.launcherPathEdit = Form1.Panel1.add("edittext", undefined, "", {readonly: true});
    //Form1.Panel1.launcherPathEdit.characters = 15;
    Form1.Panel1.launcherPathEdit.alignment = "fill";

    Form1.Panel1.launcherPathButton = Form1.Panel1.add("button");
    Form1.Panel1.launcherPathButton.text = "Change path";
    Form1.Panel1.launcherPathButton.alignment = ["fill", "bottom"];

    Form1.Panel2 = Form1.add("group");
    Form1.Panel2.orientation = "column";
    Form1.Panel2.alignment = ["fill", "bottom"];
    Form1.Panel2.alignChildren = "fill";
    //Form1.Panel2.layout.layout(true);

    Form1.Panel2.saveButton = Form1.Panel2.add("button");
    Form1.Panel2.saveButton.text = "Save project configuration";

    Form1.Panel2.sendButton = Form1.Panel2.add("button");
    Form1.Panel2.sendButton.text = "Open project in Launcher";

    Form1.onResizing = Form1.onResize = function () { this.layout.resize (); }
    Form1.layout.layout (true);

if (Form1 != null && Form1 instanceof Window) {
	Form1.show();
} else {
    Form1 = this;
}
 
//Form1.onShow = function ()  {  Form1.minimumSize = w.size;  }   

/* Implementation */
Form1.onActivate = function ()  {
    if (OS == "MAC") {
        //alert ("read start");
        var tempFile = new File ("~/Documents/AErender/Script.cfg");
        if (tempFile != null) {
            //alert ("read not null")
            tempFile.open("r", "Text", "Error");
            Form1.Panel1.launcherPathEdit.text = tempFile.readln();
            //alert("assign ok");
            tempFile.close();
        }
    }
    if (OS == "WINDOWS") {
        var tempFile = new File ("/C/ProgramData/AErender/Script.cfg");
        if (tempFile != null) {
            tempFile.open("r", "Text", "Error");
            Form1.Panel1.launcherPathEdit.text = tempFile.readln();
            tempFile.close();
        }
    //alert ("read ok");
    }
}

//var launcher = Form1.Panel1.launcherPathEdit.text;

function GetCompCount() { 
    var k = 0;
    //alert("GetCompCount ok");
    for (var i = 1; i <= app.project.numItems; i++) {
        if (app.project.item(i) instanceof CompItem) {
            k++;
        }
    }    
    //alert("loop ok");
    return k;
}

function exec(command) {
    if (OS == "MAC") {
        var execFile = new File ("~/Documents/AErender/Script.command");
        if (execFile != null) {
            execFile.open("w", "Text", "Error");
            execFile.writeln(command);
            //alert(command + "       writeln ok");
            execFile.close();
            system.callSystem("chmod +x " + execFile.fsName);
            //alert("permission ok");
            execFile.execute();
        }
    }
    if (OS == "WINDOWS") {
        var execFile = new File ("/C/ProgramData/AErender/Script.bat");
        if (execFile != null) {
            execFile.open("w", "Text", "Error");
            execFile.writeln(command);
            execFile.close();
            execFile.execute();
        }
    }
}

Form1.Panel1.launcherPathButton.onClick = function() {
    var TmpFile = new File("AErender Launcher");
    launcher = TmpFile.openDlg("Select path to AErender Launcher").fsName;
    if (launcher != "") {
        Form1.Panel1.launcherPathEdit.text = launcher;
        if (OS == "MAC") {
            var tempFile = new File ("~/Documents/AErender/Script.cfg");
            if (tempFile != null) {
                tempFile.open("w", "Text", "Error");
                tempFile.writeln(launcher);
                tempFile.close();
            }
        }
        //alert ("save ok");
        if (OS == "WINDOWS") {
            var tempFile = new File ("/c/ProgramData/AErender/Script.cfg");
            var tempPath = Form1.Panel1.launcherPathEdit.text;
            if (tempFile != null) {
                tempFile.open("w", "Text", "Error");
                tempFile.writeln(tempPath);
                tempFile.close();
            }    
        }
    } else {
        alert("Specify a valid Launcher path!");
    }
}

Form1.Panel2.saveButton.onClick = function() {
    if (app.project.file == null) {
        alert("Project must be saved first!");
        app.project.save();
    } else {
        var TmpFile = new File("Untitled.aer");
        config = TmpFile.saveDlg("Save Launcher configuration");
        //alert ("save ok");

        var cfgText = 
'<aer file="'  + app.project.file.fsName + '">\
    <compositions count="' + GetCompCount() + '">';  
        //alert ("prg & compcount ok");

        for (var i = 1; i <= app.project.numItems; i++) {
            if (app.project.items[i] instanceof CompItem) {
                cfgText += '\
        <comp>\
            <name>' + app.project.items[i].name + '</name>\
            <resolution>' + app.project.items[i].width + 'x' + app.project.items[i].height + '</resolution>\
            <framerate>' + app.project.items[i].frameRate + '</framerate>\
            <rangeStart>' + (app.project.items[i].workAreaStart * app.project.items[i].frameRate) + '</rangeStart>\
            <rangeEnd>' + ((app.project.items[i].workAreaStart * app.project.items[i].frameRate) + (app.project.items[i].workAreaDuration * app.project.items[i].frameRate))  + '</rangeEnd>\
        </comp>';    
            }  
        }
        cfgText += '\
    </compositions>\
</aer>';
    //alert ("script ok");
        if (config != null) {
            config.open("w", "Text", "Error");
            config.writeln(cfgText);
            config.close();
            //config.execute();
        } else {
            alert("File not assigned! Nothing has been changed!");
        }
    }
}

Form1.Panel2.sendButton.onClick = function() {
    //alert (launcher);
    var launcher = Form1.Panel1.launcherPathEdit.text;
    var cfgText = 
'<aer file="'  + app.project.file.fsName + '">\
    <compositions count="' + GetCompCount() + '">';  
    //alert ("prg & compcount ok");
    for (var i = 1; i <= app.project.numItems; i++) {
        if (app.project.items[i] instanceof CompItem) {
            cfgText += '\
        <comp>\
            <name>' + app.project.items[i].name + '</name>\
            <resolution>' + app.project.items[i].width + 'x' + app.project.items[i].height + '</resolution>\
            <framerate>' + app.project.items[i].frameRate + '</framerate>\
            <rangeStart>' + (app.project.items[i].workAreaStart * app.project.items[i].frameRate) + '</rangeStart>\
            <rangeEnd>' + ((app.project.items[i].workAreaStart * app.project.items[i].frameRate) + (app.project.items[i].workAreaDuration * app.project.items[i].frameRate))  + '</rangeEnd>\
        </comp>';    
        }  
    }
    cfgText += '\
    </compositions>\
</aer>';
    //alert ("script ok");
    if (launcher != null) {
        var TmpFile = new File("Untitled.aer");
        config = TmpFile.saveDlg("Save Launcher configuration");
        //alert ("save ok");
        if (config != null) { 
            config.open("w", "Text", "Error");
            config.writeln(cfgText);
            config.close();
            //alert ("write ok");
            if (OS == "WINDOWS") {
                launcher = '"' + launcher + '" -aer "' + config.fsName + '"';
                //alert (launcher + "       launcher ok");
                exec (launcher);
            }
            if (OS == "MAC") {
                launcher = 'open -a "' + launcher + '" --args -aer "' + config.fsName + '"; exit;';
                //alert (launcher + "       launcher ok");
                exec (launcher);
            }
            //system.callSystem('cmd.exe /c "' + launcher + '"');
            launcher = Form1.Panel1.launcherPathEdit.text;
            //launcher.execute();
        } else {
            alert("File not assigned! Nothing has been changed!");
        }
    } else {
        alert("Specify a valid Launcher path!");
    }
    
}
/*Form1.Panel2.alertButton.onClick = function() {
    var timeStr = system.callSystem("cmd.exe /c \"time /t\""); 
    alert("Current time is " + timeStr);
}*/