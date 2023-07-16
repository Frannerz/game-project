## game-project: Pass the pigs game

# Planning and starting my project
I decided to try and make an online version of a game I play in real life- Pass the Pigs.
On starting the game, I had learnt a lot of javaScript theory but could not yet link it with the DOM.
I started by creating the page with HTML and CSS and writing the basic javaScript function for scoring but without yet linking 
it to the DOM. I used Flexbox to create most of the page, with a separate section for each player.

# javaScript
I decided to create a random number generator and assign each number to a different possibility in the game.
At first, I used if/else statements which was quite time consuming. The first versions of the game were too easy to winso I realised I would have to increase/decrease the probability of scoring certain points. I changed the code to a switch statement to make it easier to edit and add in numbers. I also realised that by using the Math.floor method, I would not generate the numbers that I wanted, so changed this to Math.ceil.

Once I'd learnt how to link the javaScript with the DOM I worked out how to display the different scores (round points, total points, points for that throw) on different parts of the page. I then added in an arrow and message to show whose turn it was and a message to announce the winner. I also created a second page with instructions on how to play.

# Debugging and problem solving
There were quite a few things to debug and solve while making the game.
1. At first the round points were not accumulating. I realised that this was because I had declared the round points variable inside the function
so they went back to zero each time you called the function. So I moved it out of the function.
2. At first, the players could both play the game at any time, event when it wasn't their go. So I added in a removeEventListener into the stick function. I then noticed that for certain goes this did not work- if they scored 'pig out' or 'makin' bacon' they also needed to removeEventListener.
3. I spent a lot of time testing if the game was difficult enough and adding in numbers to change the probability of each score.
4. When playing, I also noticed that sometimes nothing happened. I console logged the number generated and noticed  that I had missed out some numbers when I was adding them in so I went back through my code to fix this.
5. I wanted a video to play and then display the winning image but this would not work in one function. I decided to create a function to play the video and used setTimeout to then call the second function after a given time. 
6. I couldn't get the winner to display at first but I noticed some errors in my code. As I had copied the code from player 1 and edited it for player 2, I had to be careful to change each part of the code to the correct variables, images etc. Once I have corrected this, the winning message worked.


# Next steps
To improve this game, I would like to animate an image of the pigs rolling, instead of using the video. It would also be good if you could choose the number of players who could play.
