//crud operation using java script, jquery



const fetchData=(callback)=>{
    
    $.ajax({
        url:'https://jsonplaceholder.typicode.com/photos',
        method:'GET',
        timeout:5000,
        dataType:'json',
        success:(response)=>{
            callback(response);
        },
        error:(err)=>{
            console.log(err);
        }
    });

}

const loadData=()=>{
    fetchData((data)=>{
        
        $.each(data,function(i,element){
            const row=$('<tr>');

            const colId=$('<td>').text(element.id);
            const colAlbumId=$('<td>').text(element.albumId);
            const colTitle=$('<td>').text(element.title);
            const colImage=$('<td>')
            .append($('<img>')
            .attr('src',element.thumbnailUrl)
            .attr('loading','lazy')
            .css({
                height:'70px',
                width:'70px'
            }));
            row.append(colId,colAlbumId,colTitle,colImage);
            $('.table tbody').append(row);
        });
    });
}

//========================================

const saveData=()=>{
    const newData={
        albumId:1,
        id:1,
        thumbnailUrl:"https://via.placeholder.com/150/92c952",
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url:"https://via.placeholder.com/600/92c952"
    }
    $.ajax({
        url:'https://jsonplaceholder.typicode.com/photos',
        method:'POST',
        data:JSON.stringify(newData),
        timeout:5000,
        contentType:'application/json',
        success:(response)=>{
           console.log(response)
        },
        error:(err)=>{
            console.log(err);
        }
    });
}

//=================================================
const updateData=()=>{
    const newData={
        albumId:1,
        id:1,
        thumbnailUrl:"https://via.placeholder.com/150/92c952",
        title: "accusamus beatae ad facilis cum similique qui sunt",
        url:"https://via.placeholder.com/600/92c952"
    }
    $.ajax({
        url:'https://jsonplaceholder.typicode.com/photos/1',
        method:'PUT',
        data:JSON.stringify(newData),
        timeout:5000,
        contentType:'application/json',
        success:(response)=>{
           console.log(response)
        },
        error:(err)=>{
            console.log(err);
        }
    });
}

//===========================================
const findOne=()=>{
    let id=500;
    $.ajax({
        url:`https://jsonplaceholder.typicode.com/photos/${id}`,
        method:'GET',
        timeout:5000,
        dataType:'json',
        success:(response)=>{
            console.log(response);
        },
        error:(err)=>{
            console.log(err);
        }
    });
}

//==========================================
const deletById=()=>{
    let id=500;
    $.ajax({
        url:`https://jsonplaceholder.typicode.com/photos/${id}`,
        method:'DELETE',
        timeout:5000,
        dataType:'json',
        success:(response)=>{
            console.log(response);
        },
        error:(err)=>{
            console.log(err);
        }
    });
}