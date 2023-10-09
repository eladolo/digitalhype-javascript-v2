*Here is the online URL for this [app](https://codesandbox.io/p/github/eladolo/digitalhype-javascript-v2/main?file=%2Findex.js%3A44%2C9&layout=%257B%2522sidebarPanel%2522%253A%2522GIT%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522clnj57y2p0007356mi1qaprlq%2522%252C%2522sizes%2522%253A%255B70%252C30%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522clnj57y2p0003356mx7cv3vnp%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522clnj57y2p0005356mnc3qsle8%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522clnj57y2p0006356mr6r2tga5%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B100%252C0%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522clnj57y2p0003356mx7cv3vnp%2522%253A%257B%2522id%2522%253A%2522clnj57y2p0003356mx7cv3vnp%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Findex.js%2522%252C%2522id%2522%253A%2522clnj586rb0093356ml15g8sm0%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522state%2522%253A%2522IDLE%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clnj586rb0093356ml15g8sm0%2522%257D%252C%2522clnj57y2p0006356mr6r2tga5%2522%253A%257B%2522id%2522%253A%2522clnj57y2p0006356mr6r2tga5%2522%252C%2522activeTabId%2522%253A%2522clnj9wb7e04ow356mqb7b1ryh%2522%252C%2522tabs%2522%253A%255B%257B%2522type%2522%253A%2522DOCS%2522%252C%2522id%2522%253A%2522clnj9wb7e04ow356mqb7b1ryh%2522%252C%2522mode%2522%253A%2522permanent%2522%257D%255D%257D%252C%2522clnj57y2p0005356mnc3qsle8%2522%253A%257B%2522id%2522%253A%2522clnj57y2p0005356mnc3qsle8%2522%252C%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522clnjabf6p04rf356mgohhcwk9%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522TERMINAL%2522%252C%2522shellId%2522%253A%2522clnjacbo5000ce8dc6hxsaw5h%2522%257D%255D%252C%2522activeTabId%2522%253A%2522clnjabf6p04rf356mgohhcwk9%2522%257D%257D%252C%2522showDevtools%2522%253Afalse%252C%2522showShells%2522%253Atrue%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)*

**Is a command line app that accept the following parameters:**

    - folder: string
    - deep: number

**Example:**

    node index.js dummy_folder 2

**Defaults**

If the app runs without parameters it will use the defaults:  folder=`dummy_folder` and deep=`4`

    node index.js

**Errors**

In case of an error or not finding the directory path, it will return an empty object

    {}

**Response**

If everything works as expected, you will have an echo in the console like this:

    node index.js dummy_folder2 5

    {
        "name": "dummy_folder2",
        "path": "/project/home/eladolo/workspace/dummy_folder2",
        "type": "dir",
        "size": 52,
        "children": [
            {
            "path": "/project/home/eladolo/workspace/file1.txt",
            "name": "file1.txt",
            "type": "file",
            "size": 2870
            },
            {
            "name": "level2",
            "path": "/project/home/eladolo/workspace/dummy_folder2/level2",
            "type": "dir",
            "size": 54,
            "children": [
                {
                "path": "/project/home/eladolo/workspace/file2.1.txt",
                "name": "file2.1.txt",
                "type": "file",
                "size": 0
                },
                {
                "path": "/project/home/eladolo/workspace/file2.txt",
                "name": "file2.txt",
                "type": "file",
                "size": 0
                },
                {
                "name": "level3",
                "path": "/project/home/eladolo/workspace/dummy_folder2/level2/level3",
                "type": "dir",
                "size": 30,
                "children": [
                    {
                    "path": "/project/home/eladolo/workspace/file.3.1.txt",
                    "name": "file.3.1.txt",
                    "type": "file",
                    "size": 0
                    },
                    {
                    "path": "/project/home/eladolo/workspace/file3.txt",
                    "name": "file3.txt",
                    "type": "file",
                    "size": 1722
                    },
                    {
                    "name": "level4",
                    "path": "/project/home/eladolo/workspace/dummy_folder2/level2/level3/level4",
                    "type": "dir",
                    "size": 0,
                    "children": [
                        {
                        "path": "/project/home/eladolo/workspace/file4.txt",
                        "name": "file4.txt",
                        "type": "file",
                        "size": 0
                        },
                        {
                        "path": "/project/home/eladolo/workspace/level5",
                        "name": "level5",
                        "type": "dir",
                        "size": 42
                        }
                    ]
                    }
                ]
                }
            ]
            },
            {
            "name": "level2.1",
            "path": "/project/home/eladolo/workspace/dummy_folder2/level2.1",
            "type": "dir",
            "size": 64,
            "children": [
                {
                "path": "/project/home/eladolo/workspace/file.2.1.txt",
                "name": "file.2.1.txt",
                "type": "file",
                "size": 0
                },
                {
                "name": "level3",
                "path": "/project/home/eladolo/workspace/dummy_folder2/level2.1/level3",
                "type": "dir",
                "size": 0,
                "children": []
                },
                {
                "name": "level3.1",
                "path": "/project/home/eladolo/workspace/dummy_folder2/level2.1/level3.1",
                "type": "dir",
                "size": 12,
                "children": [
                    {
                    "path": "/project/home/eladolo/workspace/file3.1.1.txt",
                    "name": "file3.1.1.txt",
                    "type": "file",
                    "size": 574
                    },
                    {
                    "path": "/project/home/eladolo/workspace/file3.1.2.txt",
                    "name": "file3.1.2.txt",
                    "type": "file",
                    "size": 4593
                    },
                    {
                    "name": "level4",
                    "path": "/project/home/eladolo/workspace/dummy_folder2/level2.1/level3.1/level4",
                    "type": "dir",
                    "size": 0,
                    "children": [
                        {
                        "path": "/project/home/eladolo/workspace/level5",
                        "name": "level5",
                        "type": "dir",
                        "size": 18
                        }
                    ]
                    }
                ]
                }
            ]
            }
        ]
    }