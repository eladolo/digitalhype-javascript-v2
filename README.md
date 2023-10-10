*Here is the online URL for this [app](https://codesandbox.io/p/github/eladolo/digitalhype-javascript-v2)*

**Is a command line app that accept the following parameters:**

    - folder: string
    - deep: number

**Example:**

    npm run app dummy_folder 2

**Defaults**

If the app runs without parameters it will use the defaults:  folder=`dummy_folder` and deep=`4`

    npm run app

**Errors**

In case of an error or not finding the directory path, it will return an empty object

    {}

**Response**

If everything works as expected, you will have an echo in the console like this:

    npm run app dummy_folder2 5

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

**Unity testing**

To run unity testing execute the following command:

    npm run test