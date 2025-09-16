
export default function NodePage() {
  const nodeExplanation = "A node is a computer that participates in the Bitcoin network by validating transactions and blocks. Running your own node gives you full control and privacy over your Bitcoin experience.";

  // Copy to clipboard function
  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // You could add a toast notification here if desired
    } catch (err) {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = text;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Node</h1>
        <p className="text-xl text-gray-600">
          Bitcoin node connection details
        </p>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <div className="mb-4 p-4 bg-stone-50 rounded-lg">
          <p className="text-stone-700 font-sans">{nodeExplanation}</p>
        </div>
        
        <div className="bg-white border border-stone-200 rounded-lg p-6">
          <h3 className="text-xl font-semibold text-stone-800 mb-4 font-serif">Node Connection Details</h3>
          <div className="space-y-4">
            <div>
              <p className="text-sm text-stone-600 mb-2 font-sans">Electrum Server Hostname:</p>
              <div className="flex items-center gap-2">
                <code className="bg-stone-100 px-3 py-2 rounded text-sm flex-1 break-all">lyfocxl3fgg3if65jo32apupd2adzmm772vsqrtwpmdn4ndoug6gwnyd.onion</code>
                <button 
                  className="bg-blue-600 text-white px-3 py-2 rounded text-sm hover:bg-blue-700 transition-colors" 
                  onClick={() => copyToClipboard('lyfocxl3fgg3if65jo32apupd2adzmm772vsqrtwpmdn4ndoug6gwnyd.onion')}
                >
                  Copy
                </button>
              </div>
            </div>
            <div>
              <p className="text-sm text-stone-600 mb-2 font-sans">Port:</p>
              <div className="flex items-center gap-2">
                <span className="bg-stone-100 px-3 py-2 rounded text-sm">50001</span>
                <button 
                  className="bg-green-600 text-white px-3 py-2 rounded text-sm hover:bg-green-700 transition-colors" 
                  onClick={() => copyToClipboard('50001')}
                >
                  Copy
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
