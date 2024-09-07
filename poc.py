"""
Author: Manoj Kumar B
Mail: manojkumar.bm@prodapt.com
Date: 2024-09-07
Description: This script accepts a 10-digit DTN from the command line, gets confirmation from the user,
establishes a Telnet connection, and executes 5 commands sequentially. It checks if the output
contains "Success:" for each command, and logs all steps and errors to a file and the console.
"""
import warnings
warnings.filterwarnings("ignore", category=DeprecationWarning)
import sys
import time
import logging
import telnetlib

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(levelname)s - %(message)s',
    handlers=[
        logging.FileHandler("telnet_log.log"),
        logging.StreamHandler()
    ]
)

def get_dtn():
    """
    Parses and validates the DTN input from the command line.
    Input:
        - sys.argv: The command-line arguments. Expected format is ["script.py", "DTN", "-", "<10-digit DTN>"]
    Output:
        - Returns the 10-digit DTN string if valid.    
    Raises:
        - Logs an error and exits if the format is incorrect or the DTN is not a valid 10-digit number.
    """
    if len(sys.argv) != 4 or sys.argv[1] != "DTN" or sys.argv[2] != "-":
        logging.error("Usage: script.py DTN - <10-digit DTN>")
        sys.exit(1)

    dtn = sys.argv[3]
    if len(dtn) != 10 or not dtn.isdigit():
        logging.error("Invalid DTN. Please enter a valid 10-digit number.")
        sys.exit(1)

    return dtn

def get_confirmation():
    """
    Prompts the user for confirmation to proceed with the Telnet connection. 
    Input:
        - User input from the console: expected 'Y' or 'N'.  
    Output:
        - Returns True if user confirms with 'Y', False otherwise.   
    Raises:
        - Logs an error and exits if input is invalid (anything other than 'Y' or 'N').
    """
    confirmation = input("Do you want to proceed with the Telnet connection? (Y/N): ").strip().upper()
    if confirmation not in ['Y', 'N']:
        logging.error("Invalid input. Please enter 'Y' or 'N'.")
        sys.exit(1)
    return confirmation == 'Y'


def execute_telnet_commands(host, port, commands):
    """
    Establishes a Telnet connection to the provided host and port, and sequentially executes a list of commands.
    It checks the output of each command for the string "Success:".
    
    Parameters:
        - host (str): The Telnet server hostname or IP address.
        - port (int): The Telnet port (usually 23).
        - commands (list of str): List of commands to execute via Telnet.
    
    Input:
        - None from the user, apart from initial DTN and confirmation.
    
    Output:
        - Logs the result of each command execution.
        - If all commands succeed, logs success and closes the connection.
    
    Raises:
        - Logs and exits if any command fails (doesn't contain "Success:"), or if the Telnet connection fails.
    """
    try:
        # Establishing the Telnet connection
        telnet = telnetlib.Telnet(host, port)
        telnet.read_until(b"username: ")
        telnet.write(b"your_username\n")  # Provide your username
        telnet.read_until(b"Password: ")
        telnet.write(b"your_password\n")  # Provide your password
        time.sleep(1)
        
        # Execute each command sequentially
        for i, command in enumerate(commands):
            logging.info(f"Executing command {i+1}: {command}")
            telnet.write(command.encode('ascii') + b"\n")
            output = telnet.read_until(b"\n").decode('ascii')
            
            # Check if the command output contains "Success:"
            if "Success:" in output:
                logging.info(f"Command {i+1} executed successfully.")
            else:
                logging.error(f"Command {i+1} failed. Exiting...")
                telnet.close()
                sys.exit(1)
                
            time.sleep(1)  # Pause before executing the next command
            
        logging.info("All commands executed successfully.")
        telnet.close()

    except Exception as e:
        logging.error(f"Telnet connection failed: {e}")
        sys.exit(1)

# Main execution
if __name__ == "__main__":
    warnings.filterwarnings("ignore", category=DeprecationWarning)
    """
    The main script flow:
    1. Parses and validates the DTN from the command-line arguments.
    2. Logs the DTN and prompts for user confirmation.
    3. If confirmed, establishes a Telnet connection and executes the commands.
    """
    dtn = get_dtn()
    
    # Log the DTN with the required prefix
    logging.info(f"DTN - {dtn}")
    
    # Get confirmation from the user
    if not get_confirmation():
        logging.info("Process aborted by the user.")
        sys.exit(1)

    # Define Telnet host, port, and commands
    telnet_host = "your_telnet_host"  # Replace with actual Telnet host
    telnet_port = 23  # Replace with actual Telnet port
    
    # List of 5 commands to be run via Telnet
    telnet_commands = [
        "command_1",  # Replace with actual command
        "command_2",  # Replace with actual command
        "command_3",  # Replace with actual command
        "command_4",  # Replace with actual command
        "command_5"   # Replace with actual command
    ]

    # Execute the commands
    execute_telnet_commands(telnet_host, telnet_port, telnet_commands)
