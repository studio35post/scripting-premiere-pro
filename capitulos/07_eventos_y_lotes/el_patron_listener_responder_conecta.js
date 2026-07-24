app.bind("afterItemsAddedToProject", function(addedItems) {
    var lote = [];

    for (var i = 0; i < addedItems.length; i++) {
        var item = addedItems[i];
        if (item.type === ProjectItemType.CLIP) {
            lote.push({
                nombre: item.name,
                ruta: item.getMediaPath(),
                duracion: item.getOutPoint().seconds - item.getInPoint().seconds
            });
        }
    }

    if (lote.length > 0) {
        enviarAssetLog(lote);
    }
});
