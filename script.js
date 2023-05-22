const grade = score => {
    if (score >= 0 && score <= 100) {
        if (Math.floor(score) >= 80) {
            return "You got A" 
        } else if (Math.floor(score) >= 70 && Math.floor(score) <= 79) {
            return "You got B"   
        } else if (Math.floor(score) >= 60 && Math.floor(score) <= 69) {
            return "You got C"   
        } else if (Math.floor(score) >= 50 && Math.floor(score) <= 59) {
            return "You got D"   
        } else {
            return "You got F"
        }
    } else {
        return "Score must not be less than 0 or more than 100."
    }
}

console.log(grade(69.5))
