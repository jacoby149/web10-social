const mockDates = [
    "Fri Dec 04 2022 14:42:26 GMT-0500 (Eastern Standard Time)",
    "Fri Dec 04 2022 16:49:26 GMT-0500 (Eastern Standard Time)",
    "Fri Dec 04 2022 15:17:26 GMT-0500 (Eastern Standard Time)",
    "Fri Dec 04 2022 17:27:26 GMT-0500 (Eastern Standard Time)",
    "Fri Dec 04 2022 18:25:26 GMT-0500 (Eastern Standard Time)",
    "Fri Dec 05 2022 11:53:26 GMT-0500 (Eastern Standard Time)",
    "Fri Dec 05 2022 12:57:26 GMT-0500 (Eastern Standard Time)",
    "Fri Dec 05 2022 13:59:26 GMT-0500 (Eastern Standard Time)",
    "Fri Dec 05 2022 14:42:26 GMT-0500 (Eastern Standard Time)",
    "Fri Dec 05 2022 15:17:26 GMT-0500 (Eastern Standard Time)"
]

const mockChat = [
    {
        id:"1",
        message: "Hello my friend",
        sentTime: mockDates[0],
        sender: "Emily",
        direction: "incoming",
        position: "single"
    },
    {
        id:"2",
        message: "Hello my friend",
        sentTime: mockDates[1],
        sender: "me",
        direction: "outgoing",
        position: "single"
    },
    {
        id:"3",
        message: "Hello my friend",
        sentTime: mockDates[2],
        sender: "Emily",
        direction: "incoming",
        position: "first"
    },
    {
        id:"4",
        message: "Hello my friend",
        sentTime: mockDates[2],
        sender: "Emily",
        direction: "incoming",
        position: "normal"
    },
    {
        id:"5",
        message: "Hello my friend",
        sentTime: mockDates[2],
        sender: "Emily",
        direction: "incoming",
        position: "normal"
    },
    {
        id:"6",
        message: "Hello my friend",
        sentTime: mockDates[2],
        sender: "Emily",
        direction: "incoming",
        position: "last"
    },
    {
        id:"7",
        message: "Hello my friend",
        sentTime: mockDates[3],
        direction: "outgoing",
        position: "first"
    },
    {
        id:"8",
        message: "Hello my friend",
        sentTime: mockDates[3],
        direction: "outgoing",
        position: "normal"
    },
    {
        id:"9",
        message: "Hello my friend",
        sentTime: mockDates[3],
        direction: "outgoing",
        position: "normal"
    },
    {
        id:"a",
        message: "Hello my friend",
        sentTime: mockDates[3],
        direction: "outgoing",
        position: "last"
    },
    {
        id:"b",
        message: "Hello my friend",
        sentTime: mockDates[4],
        sender: "Emily",
        direction: "incoming",
        position: "first"
    },
    {
        id:"c",
        message: "Hello my friend",
        sentTime: mockDates[4],
        sender: "Emily",
        direction: "incoming",
        position: "last"
    }, {
        id:"d",
        message: "Hello my friend",
        sentTime: mockDates[5],
        sender: "Emily",
        direction: "incoming",
        position: "single"
    },
    {
        id:"e",
        message: "Hello my friend",
        sentTime: mockDates[6],
        sender: "me",
        direction: "outgoing",
        position: "single"
    },
    {
        id:"f",
        message: "Hello my friend",
        sentTime: mockDates[7],
        sender: "Emily",
        direction: "incoming",
        position: "first"
    },
    {
        id:"g",
        message: "Hello my friend",
        sentTime: mockDates[7],
        sender: "Emily",
        direction: "incoming",
        position: "normal"
    },
    {
        id:"h",
        message: "Hello my friend",
        sentTime: mockDates[7],
        sender: "Emily",
        direction: "incoming",
        position: "normal"
    },
    {
        id:"i",
        message: "Hello my friend",
        sentTime: mockDates[7],
        sender: "Emily",
        direction: "incoming",
        position: "last"
    },
    {
        id:"j",
        message: "Hello my friend",
        sentTime: mockDates[8],
        direction: "outgoing",
        position: "first"
    },
    {
        id:"k",
        message: "Hello my friend",
        sentTime: mockDates[8],
        direction: "outgoing",
        position: "normal"
    },
    {
        id:"l",
        message: "Hello my friend",
        sentTime: mockDates[8],
        direction: "outgoing",
        position: "normal"
    },
    {
        id:"m",
        message: "FOLLOW THE BELOW INSTRUCTIONS",
        sentTime: mockDates[8],
        direction: "outgoing",
        position: "last"
    },
    {
        id:"n",
        message: "CLICK THE INFO ICON",
        sentTime: mockDates[9],
        sender: "Emily",
        direction: "incoming",
        position: "first"
    },
    {
        id:"o",
        message: "INFO ICON GOES TO BIO",
        sentTime: mockDates[9],
        sender: "Emily",
        direction: "incoming",
        position: "last"
    }
]

export default mockChat;