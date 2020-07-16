try:
    import Tkinter as tk # this is for python2
except:
    import tkinter as tk # this is for python3
    from gilded_rose import *
import time
counter=0
window = tk.Tk()
window.title("GildedRose")
window.geometry('650x500')
lbl = tk.Label(window, text=" Name    ",font=("Arial Bold", 16))
lbl.grid(column=0, row=0)
txt = tk.Entry(window,width=12)
txt.grid(column=1, row=0)

lb2 = tk.Label(window, text=" Sell_in  ",font=("Arial Bold", 16))
lb2.grid(column=0, row=3)
txt2 = tk.Entry(window,width=12)
txt2.grid(column=1, row=3)\

lb3 = tk.Label(window, text=" Quality  ",font=("Arial Bold", 16))
lb3.grid(column=0, row=6)
txt3 = tk.Entry(window,width=12)
txt3.grid(column=1, row=6)
list = []
log = tk.Label(window,font=("Arial Bold", 16))
log.grid(column=0, row=15)

def newWindow():
    window2 = tk.Tk()
    window2.title("show Data")
    window2.geometry('650x500')
    string=""
    for x in range(len(list)):
      string=string+"Name : "+str(list[x].name)+"\nquality : "+str(list[x].quality)+"\nsell_in : "+str(list[x].sell_in)+"\n\n"
      window2.geometry('1000x500')
      data = tk.Label(window2,font=("Arial Bold", 16))
      data.grid(column=0, row=0)
      print(string)
      data.configure(text=string)
    window2.mainloop()




def addToList():
    list.append(Item(txt.get(),int(txt2.get()),int(txt3.get())))
    log.configure(text=str(len(list))+" item added")
    txt.delete(0, 'end')
    txt2.delete(0, 'end')
    txt3.delete(0, 'end')
def submit():
      obj=GildedRose(list)
      obj.update_quality()
      newWindow()

btn = tk.Button(window, text="Add",font=("Arial Bold", 16),padx=16,command=addToList)
btn.grid(column= 10, row=12)
btn = tk.Button(window, text="Submit",font=("Arial Bold", 16),padx=16,command=submit)
btn.grid(column= 11, row=12)
window.mainloop()

