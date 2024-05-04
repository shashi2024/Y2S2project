import { useState, useEffect } from "react";
import axios from "axios";
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';
import Sidebar from "../partials/Sidebar";
import Header from "../partials/Header";
import Button from "../components/Button";

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    margin: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableHeader: {
    width: '10%',
    backgroundColor: '#f2f2f2',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  tableCell: {
    width: '10%',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 6,
  },
  actions: {
    width: '10%',
    borderStyle: 'solid',
    borderBottomWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
    borderRightWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 6,
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
  },
});

const GuestAdmin = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [guests, setGuests] = useState([]);
  const [editingGuestId, setEditingGuestId] = useState(null);
  const [editedGuestData, setEditedGuestData] = useState({
    username: "",
    fullname: "",
    email: "",
    phone: "",
    country: "",
    language: "",
    contactmethod: "",
    health: "",
    payment: "",
    request: "",
  });
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchGuests();
  }, []);

  useEffect(() => {
    handleSearch();
  }, [searchTerm]);

  const fetchGuests = async () => {
    try {
      const response = await axios.get("http://localhost:5000/guest/");
      setGuests(response.data.Guests);
    } catch (error) {
      console.error("Error fetching guests:", error);
    }
  };

  const handleUpdate = (guestId) => {
    setEditingGuestId(guestId);
    const guestToUpdate = guests.find(guest => guest._id === guestId);
    setEditedGuestData(guestToUpdate);
  };

  const cancelUpdate = () => {
    setEditingGuestId(null);
    setEditedGuestData({
      username: "",
      fullname: "",
      email: "",
      phone: "",
      country: "",
      language: "",
      contactmethod: "",
      health: "",
      payment: "",
      request: "",
    });
  };

  const updateGuest = async () => {
    try {
      await axios.put(`http://localhost:5000/guest/${editingGuestId}`, editedGuestData);
      fetchGuests();
      setEditingGuestId(null);
      setEditedGuestData({
        username: "",
        fullname: "",
        email: "",
        phone: "",
        country: "",
        language: "",
        contactmethod: "",
        health: "",
        payment: "",
        request: "",
      });
      console.log("Guest updated successfully.");
    } catch (error) {
      console.error("Error updating guest:", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditedGuestData({ ...editedGuestData, [name]: value });
  };

  const handleDelete = async (guestId) => {
    try {
      await axios.delete(`http://localhost:5000/guest/${guestId}`);
      fetchGuests();
      console.log("Guest deleted successfully.");
    } catch (error) {
      console.error("Error deleting guest:", error);
    }
  };

  const handleSearch = async () => {
    if (searchTerm.trim() === "") {
      // If search term is empty, fetch all guests
      fetchGuests();
    } else {
      // Filter guests based on the entered search term
      try {
        const response = await axios.get("http://localhost:5000/guest/");
        const allGuests = response.data.Guests;
        const filteredGuests = allGuests.filter(guest => guest.fullname.toLowerCase().includes(searchTerm.toLowerCase()));
        setGuests(filteredGuests);
      } catch (error) {
        console.error("Error fetching guests:", error);
      }
    }
  };

  const generatePDF = () => {
    const MyDocument = (
      <Document>
        <Page style={styles.page}>
          <View>
            <Text style={styles.title}>Guest List</Text>
            <View style={styles.table}>
              <View style={styles.tableRow}>
                <Text style={styles.tableHeader}>Username</Text>
                <Text style={styles.tableHeader}>Full Name</Text>
                <Text style={styles.tableHeader}>Email</Text>
                <Text style={styles.tableHeader}>Phone</Text>
                <Text style={styles.tableHeader}>Country</Text>
                <Text style={styles.tableHeader}>Language</Text>
                <Text style={styles.tableHeader}>Contact Method</Text>
                <Text style={styles.tableHeader}>Health</Text>
                <Text style={styles.tableHeader}>Payment</Text>
                <Text style={styles.tableHeader}>Request</Text>
              </View>
              {guests.map((guest) => (
                <View style={styles.tableRow} key={guest._id}>
                  <Text style={styles.tableCell}>{guest.username}</Text>
                  <Text style={styles.tableCell}>{guest.fullname}</Text>
                  <Text style={styles.tableCell}>{guest.email}</Text>
                  <Text style={styles.tableCell}>{guest.phone}</Text>
                  <Text style={styles.tableCell}>{guest.country}</Text>
                  <Text style={styles.tableCell}>{guest.language}</Text>
                  <Text style={styles.tableCell}>{guest.contactmethod}</Text>
                  <Text style={styles.tableCell}>{guest.health}</Text>
                  <Text style={styles.tableCell}>{guest.payment}</Text>
                  <Text style={styles.tableCell}>{guest.request}</Text>
                </View>
              ))}
              
            </View>
          </View>
        </Page>
      </Document>
    );

    console.log(MyDocument)
    
    return (
      <PDFDownloadLink document={MyDocument} fileName="guest_list.pdf">
        {({ blob, url, loading, error }) => (
          loading ? 'Loading document...' : 'Download PDF'
        )}
      </PDFDownloadLink>
    );
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto bg-background">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h1 className="text-2xl font-bold mb-4">Guests</h1>
              <div className="flex mb-4">
                <input type="text" placeholder="Search by full name" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="px-4 py-2 border border-gray-300 rounded-lg mr-2" />
                <Button onClick={handleSearch}>Search</Button>
                <Button onClick={generatePDF} className="ml-2">Download PDF</Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full table-auto">
                  <thead>
                    <tr className="bg-gray-200">
                      <th className="px-4 py-2">Username</th>
                      <th className="px-4 py-2">Full Name</th>
                      <th className="px-4 py-2">Email</th>
                      <th className="px-4 py-2">Phone</th>
                      <th className="px-4 py-2">Country</th>
                      <th className="px-4 py-2">Language</th>
                      <th className="px-4 py-2">Contact Method</th>
                      <th className="px-4 py-2">Health</th>
                      <th className="px-4 py-2">Payment</th>
                      <th className="px-4 py-2">Request</th>
                      <th className="px-4 py-2">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {guests.map((guest) => (
                      <tr key={guest._id} className="border-b border-gray-300">
                        <td className="px-4 py-2">{editingGuestId === guest._id ? <input type="text" name="username" value={editedGuestData.username} onChange={handleInputChange} /> : guest.username}</td>
                        <td className="px-4 py-2">{editingGuestId === guest._id ? <input type="text" name="fullname" value={editedGuestData.fullname} onChange={handleInputChange} /> : guest.fullname}</td>
                        <td className="px-4 py-2">{editingGuestId === guest._id ? <input type="text" name="email" value={editedGuestData.email} onChange={handleInputChange} /> : guest.email}</td>
                        <td className="px-4 py-2">{editingGuestId === guest._id ? <input type="text" name="phone" value={editedGuestData.phone} onChange={handleInputChange} /> : guest.phone}</td>
                        <td className="px-4 py-2">{editingGuestId === guest._id ? <input type="text" name="country" value={editedGuestData.country} onChange={handleInputChange} /> : guest.country}</td>
                        <td className="px-4 py-2">{editingGuestId === guest._id ? <input type="text" name="language" value={editedGuestData.language} onChange={handleInputChange} /> : guest.language}</td>
                        <td className="px-4 py-2">{editingGuestId === guest._id ? <input type="text" name="contactmethod" value={editedGuestData.contactmethod} onChange={handleInputChange} /> : guest.contactmethod}</td>
                        <td className="px-4 py-2">{editingGuestId === guest._id ? <input type="text" name="health" value={editedGuestData.health} onChange={handleInputChange} /> : guest.health}</td>
                        <td className="px-4 py-2">{editingGuestId === guest._id ? <input type="text" name="payment" value={editedGuestData.payment} onChange={handleInputChange} /> : guest.payment}</td>
                        <td className="px-4 py-2">{editingGuestId === guest._id ? <input type="text" name="request" value={editedGuestData.request} onChange={handleInputChange} /> : guest.request}</td>
                        <td className="px-4 py-2">
                          <div className="flex">
                            {editingGuestId === guest._id ? (
                              <div className="flex">
                                <Button onClick={updateGuest}>Save</Button>
                                <Button onClick={cancelUpdate} className="ml-2">Cancel</Button>
                              </div>
                            ) : (
                              <div className="flex">
                                <Button onClick={() => handleUpdate(guest._id)}>Update</Button>
                                <Button onClick={() => handleDelete(guest._id)} className="ml-2" variant="danger">Delete</Button>
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default GuestAdmin;
