Welcome to Devsquads's "Let's Build Something Together" day.  This is the gilded rose exercise - an open source kata (problem solved repeatedly to practice and improve our development skills).  

Here are the ground rules:

  - You and your teammates will work together to improve this sofware and build upon it.
  - Attending this session with you will be one or more people from Devsquads.  Consider them as "external consultants".  When you get stuck you can go to them.  
  - There will also be one "business owner" who you can go to for clarifications about the requirements.  


Here are our requirements:

  - We want to create a user interface.
  - We also want to add new features.
  - And, of course, we want the quality of the code improved because we've had problems in the past with bugs delivered to our client.
  
  
And here are a few constraints:

  - At any time you can get a 30 minute warning, and within those 30 minutes you must wrap up the work and prepare to "deliver to the client". 
  - "Delivering to the client" includes a demo of the software and a review of the code in github (not on your local machine).
  - Unlike most interviews where you are evaluated on your individual work, this one is a little different.  You will be evaluated on a shared piece of work.  Therefore the entire team succeeds and fails together.
  
---------
Here are the requirements of the problem at hand.



Hi and welcome to team Gilded Rose.

As you know, we are a small inn with a prime location in a prominent city ran
by a friendly innkeeper named Allison.  We also buy and sell only the finest
goods. Unfortunately, our goods are constantly degrading in quality as they
approach their sell by date.

We have a system in place that updates our inventory for us. It was developed
by a no-nonsense type named Leeroy, who has moved on to new adventures. Your
task is to add the new feature to our system so that we can begin selling a
new category of items.

First an introduction to our system:

  - All items have a sell-in value which denotes the number of days we have to
    sell the item

  - All items have a quality value which denotes how valuable the item is

  - At the end of each day our system lowers both values for every item

Pretty simple, right? Well this is where it gets interesting:

  - Once the sell by date has passed, quality degrades twice as fast

  - The quality of an item is never negative

  - "Aged Brie" actually increases in quality the older it gets

  - The quality of an item is never more than 50

  - "Sulfuras", being a legendary item, never has to be sold or decreases in
    quality

  - "Backstage passes", like aged brie, increases in quality as it's sell-in
    value approaches; quality increases by 2 when there are 10 days or less
    and by 3 when there are 5 days or less but quality drops to 0 after the
    concert

We have recently signed a supplier of conjured items. This requires an update
to our system:

  - "Conjured" items degrade in quality twice as fast as normal items

Feel free to make any changes to the update-quality method and add any new code
as long as everything still works correctly. However, do not alter the item
function as that belongs to the goblin in the corner who will insta-rage and
one-shot you as he doesn't believe in shared code ownership.


Just for clarification, an item can never have its quality increase above 50,
however "Sulfuras" is a legendary item and as such its quality is 80 and it
never alters.



Please push your code after you finish.
