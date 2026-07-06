import './ReportIssue.css';

export default function ReportIssue() {
  return (
    <div className="report-page">
      <div className="report-card">
        <div className="report-header">
          <h1>Report an Issue</h1>
          <p>
            Share a civic problem with details, a photo, and the location so it can be addressed faster.
          </p>
        </div>

        <form className="report-form">
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="title">Issue Title</label>
              <input id="title" type="text" placeholder="e.g. Pothole near Main Street" />
            </div>

            <div className="form-group">
              <label htmlFor="category">Issue Category</label>
              <select id="category" defaultValue="">
                <option value="" disabled>
                  Select category
                </option>
                <option value="pothole">Pothole</option>
                <option value="garbage">Garbage</option>
                <option value="water">Water Leakage</option>
                <option value="streetlight">Broken Streetlight</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              placeholder="Describe the issue clearly so authorities can understand it better."
            />
          </div>

          <div className="form-group">
            <label htmlFor="image">Upload Image</label>
            <div className="upload-box">
              <input id="image" type="file" accept="image/*" />
              <p>PNG, JPG, or JPEG files are supported.</p>
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="location">Current Location</label>
              <button type="button" className="location-btn">
                Detect Current Location
              </button>
            </div>

            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input id="address" type="text" placeholder="Enter or confirm the address" />
            </div>
          </div>

          <button type="submit" className="submit-btn">
            Submit Report
          </button>
        </form>
      </div>
    </div>
  );
}
