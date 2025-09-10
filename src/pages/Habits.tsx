function Habits () {
  return (
    <>
      <div className="habits-page">
        <div className="col">
          <h4>List of Habits</h4>
        </div>
        <div className="col">
          <h4>Create a Habit</h4>
          <form>
            <label>Name</label>
            <input type="text" name="title" placeholder="Name a new habit"/>
            <label>Remind every</label>
            <input type="time" name="time"/>
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Habits;