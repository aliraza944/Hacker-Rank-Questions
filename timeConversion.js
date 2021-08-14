const time1 = "07:05:30AM";
const time2 = "12:45:45PM";
const timeConvertion = (s) => {
  let time24;
  if (s.search("PM") != -1) {
    const time = s.replace("PM", "");
    const newTime = time.split(":");
    let hour = +newTime[0] + 12;
    if (hour == "24") {
      hour = "12";
    }
    time24 = `${hour}:${newTime[1]}:${newTime[2]}`;
    console.log(time24);
  } else {
    const time = s.replace("AM", "");
    const newTime = time.split(":");
    let hour;
    if (newTime[0] == "12") {
      hour = "00";
    } else {
      hour = newTime[0];
    }
    time24 = `${hour}:${newTime[1]}:${newTime[2]}`;
    // console.log(`${hour}:${newTime[1]}:${newTime[2]}`);
  }
  return time24;
};
timeConvertion(time2);
