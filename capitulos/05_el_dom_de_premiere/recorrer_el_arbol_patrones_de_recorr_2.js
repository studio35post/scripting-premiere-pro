function recorrerBin(item) {
    if (item.type === ProjectItemType.CLIP) {
        $.writeln(item.name + ": " + item.getMediaPath());
    } else if (item.type === ProjectItemType.BIN) {
        for (var i = 0; i < item.children.numItems; i++) {
            recorrerBin(item.children[i]);
        }
    }
}

recorrerBin(app.project.rootItem);
