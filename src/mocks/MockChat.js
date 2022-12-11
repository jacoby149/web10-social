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
        message: "Hello my friend",
        sentTime: mockDates[0],
        sender: "Emily",
        direction: "incoming",
        position: "single"
    },
    {
        message: "Hello my friend",
        sentTime: mockDates[1],
        sender: "me",
        direction: "outgoing",
        position: "single"
    },
    {
        message: "Hello my friend",
        sentTime: mockDates[2],
        sender: "Emily",
        direction: "incoming",
        position: "first"
    },
    {
        message: "Hello my friend",
        sentTime: mockDates[2],
        sender: "Emily",
        direction: "incoming",
        position: "normal"
    },
    {
        message: "Hello my friend",
        sentTime: mockDates[2],
        sender: "Emily",
        direction: "incoming",
        position: "normal"
    },
    {
        message: "Hello my friend",
        sentTime: mockDates[2],
        sender: "Emily",
        direction: "incoming",
        position: "last"
    },
    {
        message: "Hello my friend",
        sentTime: mockDates[3],
        direction: "outgoing",
        position: "first"
    },
    {
        message: "Hello my friend",
        sentTime: mockDates[3],
        direction: "outgoing",
        position: "normal"
    },
    {
        message: "Hello my friend",
        sentTime: mockDates[3],
        direction: "outgoing",
        position: "normal"
    },
    {
        message: "Hello my friend",
        sentTime: mockDates[3],
        direction: "outgoing",
        position: "last"
    },
    {
        message: "Hello my friend",
        sentTime: mockDates[4],
        sender: "Emily",
        direction: "incoming",
        position: "first"
    },
    {
        message: "Hello my friend",
        sentTime: mockDates[4],
        sender: "Emily",
        direction: "incoming",
        position: "last"
    }, {
        message: "Hello my friend",
        sentTime: mockDates[5],
        sender: "Emily",
        direction: "incoming",
        position: "single"
    },
    {
        message: "Hello my friend",
        sentTime: mockDates[6],
        sender: "me",
        direction: "outgoing",
        position: "single"
    },
    {
        message: "Hello my friend",
        sentTime: mockDates[7],
        sender: "Emily",
        direction: "incoming",
        position: "first"
    },
    {
        message: "Hello my friend",
        sentTime: mockDates[7],
        sender: "Emily",
        direction: "incoming",
        position: "normal"
    },
    {
        message: "Hello my friend",
        sentTime: mockDates[7],
        sender: "Emily",
        direction: "incoming",
        position: "normal"
    },
    {
        message: "Hello my friend",
        sentTime: mockDates[7],
        sender: "Emily",
        direction: "incoming",
        position: "last"
    },
    {
        message: "Hello my friend",
        sentTime: mockDates[8],
        direction: "outgoing",
        position: "first"
    },
    {
        message: "Hello my friend",
        sentTime: mockDates[8],
        direction: "outgoing",
        position: "normal"
    },
    {
        message: "Hello my friend",
        sentTime: mockDates[8],
        direction: "outgoing",
        position: "normal"
    },
    {
        message: "FOLLOW THE BELOW INSTRUCTIONS",
        sentTime: mockDates[8],
        direction: "outgoing",
        position: "last"
    },
    {
        message: "CLICK THE INFO ICON",
        sentTime: mockDates[9],
        sender: "Emily",
        direction: "incoming",
        position: "first"
    },
    {
        message: "INFO ICON GOES TO BIO",
        sentTime: mockDates[9],
        sender: "Emily",
        direction: "incoming",
        position: "last"
    }
]

export default mockChat;