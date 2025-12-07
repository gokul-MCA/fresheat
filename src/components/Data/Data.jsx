function DataPage() {
    const savedData = JSON.parse(localStorage.getItem("formData")) || {};
    const { email, phone } = savedData;
  
    return (
      <div style={{ padding: 20 }}>
        <h1>User Submitted Info</h1>
        {email && phone ? (
          <>
            <p><strong>Email:</strong> {email}</p>
            <p><strong>Phone:</strong> {phone}</p>
          </>
        ) : (
          <p>No data received.</p>
        )}
      </div>
    );
  }

  export default DataPage;
  