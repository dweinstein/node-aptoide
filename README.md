# SYNOPSIS

Download APKs from [aptoide](http://m.aptoide.com/).

# INSTALLATION

```sh
$ npm install -g aptoide
```

# USAGE

## DETAILS

Get meta data for the package id.

```sh
$ aptoide-details com.viber.voip | jq '.'
{
  "status": "OK",
  "apk": {
    "id": 29752,
    "repo": "sambat",
    "package": "com.viber.voip",
    "icon": "http://pool.img.aptoide.com/sambat/aac5778dc22a11a75036e4ad22c35d33.png",
    "icon_hd": "http://pool.img.aptoide.com/sambat/cc3148e57a2928cd1ada1bbea553c3c2_icon.png",
    "minSdk": 5,
    "minScreen": "small",
...
```

## DOWNLOAD

Download APK from the store using package id.

```sh
$ aptoide-download -o foo.apk com.viber.voip
or 
$ aptoide-download --id com.viber.voip > foo.apk
```

