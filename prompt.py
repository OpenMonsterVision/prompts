def prompt():
    typed = raw_input("$ ")
    print(typed)
    prompt()

prompt()
