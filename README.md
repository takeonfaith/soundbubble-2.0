# Soundbubble

## Architecture 

This project is build with the following principles
1. All firebase interactions are abstracted from the app into separate class and can be used only from Database Class
2. Database Class abstractes all interactions with any potential database, can be used only in Effector effects
3. Effects are the end point for all db-related operations where the app state lives

`FB -> Database -> Effects`

Effector models decribe only primitive store data manipulation that does not use complex logic within it.
For example, 

