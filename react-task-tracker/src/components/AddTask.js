const AddTask = () => {
  return (
    <form className="add-form">
{/* task */}
<div className="form-control">
    <label>Task</label>
    <input type="text" placeholder="Add Task"/>
</div>
{/* Date & Time */}
<div className="form-control">
    <label>Date & Time</label>
    <input type="datetime-local" placeholder="Add Date & Time"/>
</div>
{/* Reminder */}
<div className="form-control">
    <label>Set Reminder</label>
    <input type="text" placeholder="Add Reminder"/>
</div>
    </form>
  )
}

export default AddTask