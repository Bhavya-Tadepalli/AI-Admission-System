function Dashboard(){

return(

<div className="p-10">

<h1 className="text-3xl font-bold text-indigo-600 mb-6">
Admission Result Dashboard
</h1>

<div className="grid grid-cols-3 gap-6">

<div className="bg-white shadow-lg p-6 rounded">
<h3 className="text-xl font-semibold">Extracted Marks</h3>
<p className="text-2xl text-blue-500">92%</p>
</div>

<div className="bg-white shadow-lg p-6 rounded">
<h3 className="text-xl font-semibold">Admission Chance</h3>
<p className="text-2xl text-green-500">85%</p>
</div>

<div className="bg-white shadow-lg p-6 rounded">
<h3 className="text-xl font-semibold">Recommended Course</h3>
<p className="text-xl text-purple-500">B.Tech Computer Science</p>
</div>

</div>

</div>

)

}

export default Dashboard;