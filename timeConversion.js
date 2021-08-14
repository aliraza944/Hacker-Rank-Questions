const time1 = "12:05:30AM";
const time2 = "07:05:45PM";
const timeConvertion = (s) => {
  if (s.search("PM") != -1) {
    const time = s.replace("PM", "");
    const newTime = time.split(":");
    const hour = +newTime[0] + 12;
    console.log(`${hour}:${newTime[1]}:${newTime[2]}`);
  } else {
    console.log(s.replace("AM", ""));
  }
};
timeConvertion(time2);
