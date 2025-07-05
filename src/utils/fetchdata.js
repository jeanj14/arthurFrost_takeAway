// fetch("https://arthurfrost.qflo.co.za/php/getTimeline.php")
//  .then(res => res.json())
//  .then(data => console.log(data.Timeline))

const fetchData = async () => {
    const res = await fetch("https://arthurfrost.qflo.co.za/php/getTimeline.php");
    const json = await res.json();
    const timelineData = json.Timeline.slice(0,9);
    return timelineData;
}

export default fetchData;