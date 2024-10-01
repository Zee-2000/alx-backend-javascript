export default function getNeighborhoodsList(){
    this.SanFransiscoNeighborhoods = ['SOMA', 'Union Square'];

    const self = this;
    this.addNeighborhood = (newNeighborhood) => {
        self.SanFransiscoNeighborhoods.push(newNeighborhood);
        return self.SanFransiscoNeighborhoods;
    };
}