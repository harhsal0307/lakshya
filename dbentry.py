from pymongo import MongoClient
client = MongoClient("mongodb+srv://munir:db54xyz@cluster0.npvhtiy.mongodb.net/Quiz")

#Getting the database instance
db = client['Quiz']

#Creating a collection
coll = db['questions']
a=104
n=1

#Inserting document into a collection
while n==1:
    a=a+1
    b=input("question: ")
    c=input("Option1: ")
    d=input("option2: ")
    e=input("option3: ")
    f=input("option4: ")

    g=int(input("correctAnswer: 1."+c+"  2."+d+"  3."+e+"  4."+f))
    if g==1:
        ans=c
    elif g==2:
        ans=d
    elif g==3:
        ans=e
    elif g==4:
        ans=f
    h=int(input("Question Category: 1. Science 2. Commerce  3.Arts  4.Maths  5.GK "))

    cat=""
    if h==1:
        cat="Science"
        # i=input(" Question sub CAtegory: 1. Engineering  2.Medical  3.Chemistry")
    elif h==2:
        cat="Commerce"
        # i=input("Question sub CAtegory: 1. Business  2.CA ")
    elif h==3:
        cat="Arts"
        # i=input("Question sub CAtegory: 1.  2.CA ")
    elif h==4:
        cat="Maths"
    elif h==5:
        cat="GK"
    i="none"


    doc1 = {
        "q_id": a,
        "question":b,
        "opt1":c,
        "opt2":d,
       "opt3":e,
        "opt4":f,
        "answer":ans,
        "category":cat,
        "sub_cat":i
    }
    coll.insert_one(doc1)
    n=int(input("To Exit Enter 0"))

client.close()