import { useState } from "react";

const AddTask = ({onAdd}) => {

const [text, setText] = useState('');
const [day, setDate] = useState('');
const [reminder, setReminder] = useState(false);

const onSubmit = (e) => {
  e.preventDefault()

  if(!text){
    alert('Please add a task')
    return
  }

  onAdd({text, day, reminder})

  setText('')
  setDate('')
  setReminder(false)

}


  return (
    <form className="add-form" onSubmit={onSubmit}>

{/* task */}
<div className="form-control">
    <label>Task</label>
    <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} required />
</div>

{/* Date & Time */}
<div className="form-control">
    <label>Date & Time</label>
    <input type="datetime-local" placeholder="Add Date & Time" value={day} onChange={(e) => setDate(e.target.value)} required />
</div>

{/* Reminder */}
<div className="form-control reminder-form-control">
    <label>Set Reminder</label>
    <input className="reminder-input" type="checkbox" placeholder="Add Reminder" checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
</div>

<input className="SaveTask-btn" type="submit" value="Save Task"/>
    </form>
  )
}

export default AddTask