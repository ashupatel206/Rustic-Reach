// // Prevents additional console window on Windows in release, DO NOT REMOVE!!
// #![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

// fn main() {
//   tauri::Builder::default()
//     .run(tauri::generate_context!())
//     .expect("error while running tauri application");
// }

use serde_json::json;
use tauri::Manager;

#[tauri::command]
fn get_files(app: tauri::AppHandle) {
    let data = get_files_data();
    app.emit_all("files", Some(data));
}

fn get_files_data() -> Vec<serde_json::Value> {
    // Replace this with your actual data fetching logic
    vec![
        json!({"id": 1, "name": "File 1", "created_date": "2023-01-01", "path": "/files/file1"}),
        json!({"id": 2, "name": "File 2", "created_date": "2023-01-02", "path": "/files/file2"}),
        json!({"id": 3, "name": "File 3", "created_date": "2023-01-03", "path": "/files/file3"}),
    ]
}

//[tokio::main]
async fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![get_files])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
