db = db.getSiblingDB('proyfinalgrupo02');
db.createUser({
    user: "appuser",
    pwd: "appsecret",
    roles: [{ role: "readWrite", db: "proyfinalgrupo02" }]
});