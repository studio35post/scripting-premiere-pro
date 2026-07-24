app.bind("afterItemsAddedToProject", function(addedItems) {
    var logEntry = [];
    for (var i = 0; i < addedItems.length; i++) {
        var item = addedItems[i];
        if (item.type === ProjectItemType.CLIP) {
            logEntry.push(item.name + " | " + item.getMediaPath());
        }
    }

    if (logEntry.length > 0) {
        var eventObj = new CSXSEvent();
        eventObj.type = "studio35.itemsAdded";
        eventObj.data = JSON.stringify(logEntry);
        eventObj.dispatch();
    }
});
