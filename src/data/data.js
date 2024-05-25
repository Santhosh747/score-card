import { iconsImgs } from "../utils/images";
import { personsImgs } from "../utils/images";

export const navigationLinks = [
    { id: 1, title: 'Home', image: iconsImgs.home },
    { id: 2, title: 'Budget', image: iconsImgs.budget },
    { id: 3, title: 'Transactions', image: iconsImgs.plane },
    { id: 4, title: 'Subscriptions', image: iconsImgs.wallet },
    { id: 5, title: 'Loans', image: iconsImgs.bills },
    { id: 6, title: 'Reports', image: iconsImgs.report },
    { id: 7, title: 'Savings', image: iconsImgs.wallet },
    { id: 8, title: 'Financial Advice', image: iconsImgs.wealth },
    { id: 9, title: 'Account', image: iconsImgs.user },
    { id: 10, title: 'Settings', image: iconsImgs.gears }
];

export const transactions = [
    {
        id: 11, 
        name: "Sarah Parker",
        image: personsImgs.person_four,
        date: "ODD Sem 3",
        amount: 9.27
    },
    {
        id: 12, 
        name: "Krisitine Carter",
        image: personsImgs.person_three,
        date: "ODD Sem 3",
        amount: 8.0
    },
    {
        id: 13, 
        name: "Irene Doe",
        image: personsImgs.person_two,
        date: "EVEN SEM 2",
        amount: 6.0
    }
];

export const reportData = [
    {
        id: 14,
        month: "",
        value1: 45,
        value2: null
    },
    {
        id: 15,
        month: "Fb",
        value1: 45,
        value2: 60
    },
    {
        id: 16,
        month: "Mar",
        value1: 45,
        value2: null
    },
    {
        id: 17,
        month: "Apr",
        value1: 45,
        value2: null
    },
    {
        id: 18,
        month: "May",
        value1: 45,
        value2: null
    }
];

export const budget = [
    {
        id: 19, 
        title: "Clg1",
        type: "Hackathon",
        amount: 22000
    },
    {
        id: 20, 
        title: "Clg2",
        type: "Paper Presentation",
        amount: 16000
    },
    {
        id: 21, 
        title: "clg3",
        type: "Project Presentation",
        amount: 20000
    },
    
];

export const subscriptions = [
    {
        id: 24,
        title: "Leetcode",
        due_date: "contest",
        amount: 1414
    },
    {
        id: 25,
        title: "codechef",
        due_date: "Contest",
        amount: 1200
    },
    {
        id: 26,
        title: "Code Force",
        due_date: "Contest",
        amount: 851
    }
];

export const savings = [
    {
        id: 27,
        image: personsImgs.person_one,
        saving_amount: 250000,
        title: "Pay's Skill",
        date_taken: "23/12/22",
        amount_left: 40000
    }
]