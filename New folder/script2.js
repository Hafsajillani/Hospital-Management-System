// Define a list of available supplements
const availableSupplements = [
    { name: 'Vitamin C', dosage: '1000mg', form: 'Tablet' },
    { name: 'Omega-3', dosage: '1000mg', form: 'Capsule' },
    { name: 'Probiotic', dosage: '10 billion CFU', form: 'Capsule' },
    { name: 'Vitamin D3', dosage: '2000IU', form: 'Softgel' },
  ];
  
  // Get a reference to the HTML elements
  const patientNameInput = document.getElementById('patient-name');
  const supplementSelect = document.getElementById('supplement-select');
  const dosageInput = document.getElementById('dosage-input');
  const formInput = document.getElementById('form-input');
  const addButton = document.getElementById('add-button');
  const supplementList = document.getElementById('supplement-list');
  
  // Populate the supplement select options with the available supplements
  availableSupplements.forEach(supplement => {
    const option = document.createElement('option');
    option.value = supplement.name;
    option.textContent = supplement.name;
    supplementSelect.appendChild(option);
  });
  
  // Listen for when the add button is clicked
  addButton.addEventListener('click', e => {
    e.preventDefault();
    
    // Get the patient name, supplement name, dosage, and form from the inputs
    const patientName = patientNameInput.value.trim();
    const supplementName = supplementSelect.value;
    const dosage = dosageInput.value.trim();
    const form = formInput.value.trim();
    
    // Create a new supplement object with the selected options
    const supplement = availableSupplements.find(supplement => supplement.name === supplementName);
    const newSupplement = {
      name: supplement.name,
      dosage,
      form: form || supplement.form,
    };
    
    // Create a new list item to display the supplement information
    const li = document.createElement('li');
    li.textContent = `${patientName}: ${newSupplement.name} ${newSupplement.dosage} ${newSupplement.form}`;
    
    // Add the list item to the supplement list
    supplementList.appendChild(li);
    
    // Reset the inputs
    patientNameInput.value = '';
    supplementSelect.value = '';
    dosageInput.value = '';
    formInput.value = '';
  });