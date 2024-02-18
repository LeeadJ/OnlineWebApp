export async function getCodeBlocks() {
    try {
        const response = await fetch("http://localhost:3002/codeblocks", {
            mode: "cors",
        });
        console.log('GetCodeBlocks: Response:', response);
        const codeblocks = await response.json();
        console.log('GetCodeBlocks: Code Blocks:', codeblocks);
        return codeblocks;
    } catch (error) {
        console.error('Error fetching code GetCodeBlocks blocks:', error);
        throw error;
    }

}

export async function fetchSingleCodeBlock(id) {
    try {
        const response = await fetch(`http://localhost:3002/codeblocks/${id}`, {
            mode: "cors",
        });
        // console.log('fetchSingleCodeBlock: Response:', response);
        const [block] = await response.json();
        console.log('fetchSingleCodeBlock: Code Block:', block);
        return block;
    } catch (error) {
        console.error('Error fetching code fetchSingleCodeBlock block:', error);
        throw error;
    }
}

export async function updateSingleCodeBlock(singleCodeBlock) {
    try {
        const response = await fetch(`http://localhost:3002/codeblocks/${singleCodeBlock._id}`, {
            mode: "cors",
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
              },
            body: JSON.stringify(singleCodeBlock),
        });
    } catch (error) {
        console.error('Error updating code updateSingleCodeBlock block:', error);
        throw error;
    }
}