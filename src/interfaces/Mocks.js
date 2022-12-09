import lillyIco from "../assets/images/avatar9.png"
import joeyIco from "../assets/images/avatar6.png"
import emilyIco from "../assets/images/avatar7.png"
import AaronIco from "../assets/images/avatar4.png"
import ShadiyaIco from "../assets/images/avatar10.png"
import BrianIco from "../assets/images/avatar2.png"

const mockContacts = [
    {
        name: "Emily",
        lastSenderName: "Emily",
        message: "Yes I can do it for you",
        pic: emilyIco
    },
    {
        name: "Lilly",
        lastSenderName: "Lilly",
        message: "what time are you thinking?",
        pic: lillyIco
    },
    {
        name: "Joey",
        lastSenderName: "Joey",
        message: "OK. sounds good, thanks!",
        pic: joeyIco
    },
    {
        name: "Aaron",
        lastSenderName: "Aaron",
        message: "hahaha :)",
        pic: AaronIco
    },
    {
        name: "Shadiya",
        lastSenderName: "Shadiya",
        message: "can't wait!",
        pic: ShadiyaIco
    },
    {
        name: "Brian",
        lastSenderName: "Brian",
        message: "Let's talk later.",
        pic: BrianIco
    },
]

const mockChat = [
    {
        message: "Hello my friend",
        sentTime: "15 mins ago",
        sender: "Emily",
        direction: "incoming",
        position: "single"
    }, {
        message: "Hello my friend",
        sentTime: "15 mins ago",
        sender: "Emily",
        direction: "incoming",
        position: "single"
    }
]

export { mockContacts }