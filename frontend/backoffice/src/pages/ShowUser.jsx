import { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

function ShowUser() {
  const { id } = useParams();
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const componentRef = useRef();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:5000/user/${id}`)
      .then((res) => {
        setUser(res.data.users);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  const printDocument = () => {
    html2canvas(componentRef.current).then(canvas => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'JPEG', 0, 0);
      pdf.save("download.pdf");  
    });
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex items-center justify-center h-screen bg-red-200">
      <div className="bg-white p-8 rounded shadow-lg" ref={componentRef}>
        <h1 className="text-2xl font-bold mb-4">{user.name}</h1>
        <div className="space-y-4">
          <div>
            <div className="font-semibold text-indigo-500">User Name</div>
            <p className="text-gray-500">{user.name}</p>
          </div>
          <div>
            <div className="font-semibold text-indigo-500">User ID</div>
            <p className="text-gray-500">{user.uID}</p>
          </div>
          <div>
            <div className="font-semibold text-indigo-500">User Email</div>
            <p className="text-gray-500">{user.email}</p>
          </div>
          <div>
            <div className="font-semibold text-indigo-500">Department</div>
            <p className="text-gray-500">{user.department}</p>
          </div>
          <div>
            <div className="font-semibold text-indigo-500">Role</div>
            <p className="text-gray-500">{user.rID}</p>
          </div>
        </div>
        <button onClick={printDocument} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Download Report
        </button>
      </div>
    </div>
  );
}

export default ShowUser;