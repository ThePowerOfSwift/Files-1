
# surge

// hostname= api.revenuecat.com



http-response ^https:\/\/api\.revenuecat\.com\/.*\/subscribers\/[0-9a-fA-F]{8}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{4}\-[0-9a-fA-F]{12}$ requires-body=1,max-size=0,script-path=https://raw.githubusercontent.com/langkhach270389/Scripting/master/1blocker.js,script-update-interval=0