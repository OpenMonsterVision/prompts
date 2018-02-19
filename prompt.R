prompt <- function()
{ 
  n <- readline(prompt="Prompt$ ")
  if(n == "0") return("0")
  else{
  print(n)
  return(prompt())
}}


prompt()
