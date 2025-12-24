// react-form.js
class ReactForm extends React.Component {
    constructor(props) {
      super(props);
  
      // Your existing state (replace these placeholders with your actual state variables)
      this.state = {
        age: '',
        bmi: '',
        glucose: '',
        insulin: '',
        homa: '',
        leptin: '',
        adiponectin: '',
        resistin: '',
        mcp1: '',
      };
    }
  
    // Your existing handleChange method (replace this placeholder with your actual handleChange logic)
    handleChange = (event) => {
      this.setState({ [event.target.name]: event.target.value });
    };
  
    // Your existing handleSubmit method (replace this placeholder with your actual handleSubmit logic)
    handleSubmit = (event) => {
      event.preventDefault();
      // Add your form submission logic here
      // You can access form data using this.state
      console.log('Form data submitted:', this.state);
    };
  
    // Your existing render method
    render() {
      return (
        <div>
        <h1 className="text-2xl font-bold mb-4">Enter Clinical Details</h1>
        <form onSubmit={this.handleSubmit}>
          {/* Render your input fields using React state */}
          {/* Add onChange handlers to update state */}
          <div className="mb-4">
            <label htmlFor="age">Age:</label>
            <input type="text" id="age" name="age" className="p-2 border rounded-md" required />
          </div>

          <div className="mb-4">
            <label htmlFor="bmi">BMI:</label>
            <input type="text" id="bmi" name="bmi" className="p-2 border rounded-md" required />
          </div>

          <div className="mb-4">
            <label htmlFor="glucose">Glucose:</label>
            <input type="text" id="glucose" name="glucose" className="p-2 border rounded-md" required />
          </div>

          <div className="mb-4">
            <label htmlFor="insulin">Insulin:</label>
            <input type="text" id="insulin" name="insulin" className="p-2 border rounded-md" required />
          </div>

          <div className="mb-4">
            <label htmlFor="homa">HOMA:</label>
            <input type="text" id="homa" name="homa" className="p-2 border rounded-md" required />
          </div>

          <div className="mb-4">
            <label htmlFor="leptin">Leptin:</label>
            <input type="text" id="leptin" name="leptin" className="p-2 border rounded-md" required />
          </div>
        
          <div className="mb-4">
            <label htmlFor="adiponectin">Adiponectin:</label>
            <input type="text" id="adiponectin" name="adiponectin" className="p-2 border rounded-md" required />
          </div>

          <div className="mb-4">
            <label htmlFor="resistin">Resistin:</label>
            <input type="text" id="resistin" name="resistin" className="p-2 border rounded-md" required />
          </div>
        
          <div className="mb-4">
            <label htmlFor="mcp-1">MCP-1:</label>
            <input type="text" id="mcp-1" name="mcp-1" className="p-2 border rounded-md" required />
          </div>
            
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
              Predict
            </button>
          </form>
        </div>
      );
    }
  }
  
  // Mount the React component to the specified div
  ReactDOM.render(<ReactForm />, document.getElementById('react-form'));
  