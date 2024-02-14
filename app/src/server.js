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

export async function getSingleCodeBlock(id) {
    try {
        const response = await fetch(`http://localhost:3002/codeblocks/${id}`, {
            mode: "cors",
        });
        console.log('getSingleCodeBlock: Response:', response);
        const [block] = await response.json();
        console.log('getSingleCodeBlock: Code Block:', block);
        return block;
    } catch (error) {
        console.error('Error fetching code getSingleCodeBlock block:', error);
        throw error;
    }

}